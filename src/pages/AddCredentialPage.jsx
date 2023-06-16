import { useState } from 'react';
import { Heading, VStack, Box, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

function AddCredentialPage() {
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await fetch("http://http://localhost:3366/credentials", {
                method: 'POST',
                headers: {
                    "Content-type": 'application/json',
                },
                body: JSON.stringify({
                    nama: name,
                    url: url,
                    username: username,
                    password: password,
                })
            })
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <VStack spacing={4} w='100%'>
            <Heading as='h2' size='xl'>
                Add New Credentials
            </Heading>

            <Box>
                <form onSubmit={handleSubmit}>
                    <VStack>
                        <FormControl>
                            <FormLabel>Nama</FormLabel>
                            <Input type='text' placeholder="please enter name" w="100%" onChange={(e) => setName(e.target.value)} value={name}/>
                            <FormLabel>URL</FormLabel>
                            <Input type='text' placeholder="please enter URL" w="100%" onChange={(e) => setUrl(e.target.value)} value={url}/>
                            <FormLabel>Username</FormLabel>
                            <Input type='text' placeholder="please enter Username" w="100%" onChange={(e) => setUsername(e.target.value)} value={username}/>
                            <FormLabel>Password</FormLabel>
                            <Input type='text' placeholder="please enter Password" w="100%" onChange={(e) => setPassword(e.target.value)} value={password}/>
                        </FormControl>
                        <Button colorScheme='blue' w='100%' type='submit'>Add Credentials</Button>
                    </VStack>
                </form>
            </Box>
        </VStack>
    )
}

export default AddCredentialPage