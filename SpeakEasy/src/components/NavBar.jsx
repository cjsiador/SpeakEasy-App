import { useEffect, useRef, useState } from 'react'
import speakEasyLogo from '../assets/logo-no-background.svg'
import { Flex, Spacer, Box, Button, ButtonGroup, Image, Link } from '@chakra-ui/react'
import githubIcon from '../assets/github.png'

function NavBar () {
    return (
        <>
            <Box className='nav-bar'>
                <Flex minWidth='max-content' alignItems='center' gap='2'>
                    <Box p='2' position='relative'>
                        <Button
                            colorScheme= 'transparent'
                            m={2}
                        >
                            <h1 className='nav-bar-h1'>Speak Easy</h1>
                        </Button>
                    </Box>
                    <Spacer/>
                    <ButtonGroup p='1' gap='1' className='nav-bar-right-side' style={{marginTop: '10px'}}>
                        <Link href="https://github.com/cjsiador/SpeakEasy-App" isExternal>
                            <Button
                                colorScheme= 'transparent'
                                m={2}
                                height='42px'
                                width="80px"
                                href="https://github.com/cjsiador/SpeakEasy-App"
                            >
                                <Image src={githubIcon}/>
                            </Button>
                        </Link>
                    </ButtonGroup>
                </Flex>
            </Box>
        </>
    )
}

export default NavBar