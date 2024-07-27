import { useEffect, useRef, useState } from 'react'
import LanguageSelector from './LanguageSelector';
import ProgressComp from './Progress';
import { Textarea, Button } from '@chakra-ui/react'
import speakEasyLogo from '../assets/logo-no-background.svg'

function TranslationComp() {
    // Model loading
    const [ready, setReady] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [progressItems, setProgressItems] = useState([]);

    // Inputs and outputs
    const [input, setInput] = useState('I love Speak Easy.');
    const [sourceLanguage, setSourceLanguage] = useState('eng_Latn');
    const [targetLanguage, setTargetLanguage] = useState('fra_Latn');
    const [output, setOutput] = useState('');

    // Create a reference to the worker object.
    const worker = useRef(null);

    // We use the `useEffect` hook to setup the worker as soon as the `App` component is mounted.
    useEffect(() => {
    if (!worker.current) {
        // Create the worker if it does not yet exist.
        worker.current = new Worker(new URL('../worker.js', import.meta.url), {
        type: 'module'
        });
    }

    // Create a callback function for messages from the worker thread.
    const onMessageReceived = (e) => {
        switch (e.data.status) {
        case 'initiate':
            // Model file start load: add a new progress item to the list.
            setReady(false);
            setProgressItems(prev => [...prev, e.data]);
            break;

        case 'progress':
            // Model file progress: update one of the progress items.
            setProgressItems(
            prev => prev.map(item => {
                if (item.file === e.data.file) {
                return { ...item, progress: e.data.progress }
                }
                return item;
            })
            );
            break;

        case 'done':
            // Model file loaded: remove the progress item from the list.
            setProgressItems(
            prev => prev.filter(item => item.file !== e.data.file)
            );
            break;

        case 'ready':
            // Pipeline ready: the worker is ready to accept messages.
            setReady(true);
            break;

        case 'update':
            // Generation update: update the output text.
            setOutput(e.data.output);
            break;

        case 'complete':
            // Generation complete: re-enable the "Translate" button
            setDisabled(false);
            break;
        }
    };

    // Attach the callback function as an event listener.
    worker.current.addEventListener('message', onMessageReceived);

    // Define a cleanup function for when the component is unmounted.
    return () => worker.current.removeEventListener('message', onMessageReceived);
    });

    const translate = () => {
    setDisabled(true);
    worker.current.postMessage({
        text: input,
        src_lang: sourceLanguage,
        tgt_lang: targetLanguage,
    });
    }

    return (
        <>
            <div className='hero-container'>
                <img src={speakEasyLogo}></img>
                <div className='container'>
                    <div className='language-container'>
                        <LanguageSelector type={"Source"} defaultLanguage={"eng_Latn"} onChange={x => setSourceLanguage(x.target.value)} />
                        <LanguageSelector type={"Target"} defaultLanguage={"fra_Latn"} onChange={x => setTargetLanguage(x.target.value)} />
                    </div>

                    <div className='textbox-container'>
                        <Textarea
                            border='4px' 
                            color='white'
                            value={input} 
                            rows={3} 
                            onChange={e => setInput(e.target.value)}
                        ></Textarea>
                        <Textarea 
                            border='4px'
                            color='white'
                            value={output} 
                            rows={3}
                            readOnly
                        ></Textarea>
                    </div>
                </div>
                <Button
                    fontSize='20px'
                    size='md'
                    height='48px'
                    width='200px'
                    border='4px'
                    borderColor='white'
                    colorScheme= 'transparent'
                    _hover={{ 
                        borderColor: '#ffffff',
                        opacity: '80%'
                    }}
                    disabled={disabled}
                    onClick={translate}
                >
                    Translate
                </Button>

                <div className='progress-bars-container'>
                    {ready === false}
                    {progressItems.map(data => (
                        <div style={{marginTop:'0px'}} key={data.file}>
                            <ProgressComp text={data.file} percentage={data.progress} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}


export default TranslationComp