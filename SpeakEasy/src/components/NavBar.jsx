import { useEffect, useRef, useState } from 'react'
import speakEasyLogo from '../assets/logo-no-background.svg'
import { Flex, Spacer, Box, Button, ButtonGroup } from '@chakra-ui/react'

function NavBar () {
    return (
        <>
            <div className='nav-bar'>
                <Flex minWidth='max-content' alignItems='center' gap='2'>
                    <Box p='2' position='relative'>
                        {/* <img className='nav-bar-img' src={speakEasyLogo}></img> */}
                        <Button
                            colorScheme= 'transparent'
                            m={2}
                        >
                            <h1 className='nav-bar-h1'>Speak Easy</h1>
                        </Button>
                    </Box>
                    <Spacer/>
                    <ButtonGroup p='1' gap='1' className='nav-bar-right-side' style={{marginTop: '10px'}}>
                        {/* <Button
                            fontSize='20px'
                            size='md'
                            height='48px'
                            width='100px'
                            border='4px'
                            borderColor='white'
                            colorScheme= 'transparent'
                            _hover={{ 
                                borderColor: '#ffffff',
                                opacity: '80%'
                            }}
                        >
                            Sign Up
                        </Button> */}
                        <Button
                            fontSize='20px'
                            size='md'
                            height='48px'
                            width='100px'
                            border='4px'
                            borderColor='white'
                            colorScheme= 'transparent'
                            _hover={{ 
                                borderColor: '#ffffff',
                                opacity: '80%'
                            }}
                            as="a"
                            href="https://github.com/cjsiador/SpeakEasy-App"
                        >
                            Github
                        </Button>
                    </ButtonGroup>
                </Flex>
            </div>
        </>
    )
}

export default NavBar