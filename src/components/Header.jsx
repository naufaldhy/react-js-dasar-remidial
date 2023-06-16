import React from 'react';
import { Box, Flex, Heading, Spacer, Link as ChakraLink} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function Header() {
    return (
        <Box bg='blue.700' px={4} py={3} w='100%'>
            <Flex>
                <ChakraLink as={RouterLink} to="/">
                    <Heading as='h1' size='1g' color='white'>
                        Password Manager
                    </Heading>
                </ChakraLink>
            </Flex>
        </Box>
    )
}

export default Header