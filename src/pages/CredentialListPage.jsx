import { useEffect} from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SimpleGrid, Heading, Flex, Button, Divider, Spacer } from '@chakra-ui/react'
import CredentialCard from '../components/CredentialCard';

function CredentialListPage() {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3366/credentials ');
            const data = await response.json();

            setCredentials(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData()
    }, []);

    const handleButtonClick = (e) => {
        e.preventDefault();

        navigate("/credentials/add")
    }

    return (
        <>
        <Flex>
            <Heading my={4} mx={4}>Credentials</Heading>
            <Spacer />
            <Button colorScheme='blue' onClick={handleButtonClick}>Add</Button>
        </Flex>
        <Divider />
        <SimpleGrid column={3} spacing={4}>
            {credentials.length > 0 && credentials.map((credential, index) => {
                return <CredentialCard key={index} credential={credential} />;
            })}

        </SimpleGrid>
        </>
    )
}

export default CredentialListPage;