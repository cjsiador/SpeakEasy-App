import { useEffect, useRef, useState } from 'react'
import speakEasyLogo from '../assets/logo-no-background.svg'
import { Button } from '@chakra-ui/react'

function LandingComp() {
    return(
        <>
            <div className='hero-container'>
                <img src={speakEasyLogo}></img>
                {/* <h1>SpeakEasy</h1>
                <h2>Unlock the World with Your Voice</h2> */}
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
                >
                    GET STARTED
                </Button>
            </div>
        </>
    )
}

export default LandingComp