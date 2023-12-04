
import {
    Flex,
    Container,
    Box,
    FormControl,
    FormLabel,
    Center,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Textarea,
    Stack,
    Button,
    Heading,
    Text,
    Select,
    useColorModeValue,
    Link,
    VStack
} from '@chakra-ui/react'

import { useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
// import axios from 'axios'
// import { Navigate } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import { postUser } from '../Redux/Authentication/action'

let initialState = {
    email: "",
    name: "",
    phone: "",
    label: "",
}


const Contact = () => {
    const [userData, setUserData] = useState(initialState)
    const [showModal, setShowModal] = useState(false);


    // const dispatch = useDispatch()

    const openModal = () => {
        setShowModal(true)
    }

    const handleSubmit = () => {
        // console.log(userData)

        // fetch("https://server-api-hofo.onrender.com/contact/users", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(userData)
        // })
        fetch("http://localhost:8080/contact/users").then((res) => {
            return res.json()
        }).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })

    }


    return (

        <Container maxW="container.md" p={2}>
            <Center>

                <Button onClick={openModal} colorScheme='teal' variant='solid' >
                    Ask Question
                </Button>
            </Center>
            {showModal &&
                <Box p={4} >
                    <VStack align="start" spacing={4}>
                        {/* Username (disabled input, fetched from signed-in user data) */}
                        <FormControl>
                            <FormLabel>Full Name</FormLabel>
                            <Input placeholder="Enter your full name" value={userData.name} onChange={(e) => setUserData({ ...userData, name: e.target.value })} />
                        </FormControl>

                        {/* Question Title */}
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input type="text"
                                placeholder="Enter your email" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                        </FormControl>

                        {/* Question Description */}
                        <FormControl>
                            <FormLabel>Phone</FormLabel>
                            <Input placeholder="Enter your mobile number" value={userData.phone} onChange={(e) => setUserData({ ...userData, phone: e.target.value })} />
                        </FormControl>

                        {/* Language */}
                        <FormControl>
                            <FormLabel>Label</FormLabel>
                            <Select placeholder="Select label" value={userData.label} onChange={(e) => setUserData({ ...userData, label: e.target.value })}>
                                <option value="work">Work</option>
                                <option value="school">School</option>
                                <option value="friends">Friends</option>
                                <option value="family">Family</option>
                            </Select>
                        </FormControl>



                        {/* Post Question Button */}
                        <Button colorScheme="teal" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </VStack>
                </Box>
            }
        </Container >
    )
}

export default Contact




