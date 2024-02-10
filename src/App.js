import React, { useState, useEffect } from 'react';
import {
  ChakraProvider,
  Box,
  Flex,
  Text,
  Link,
  extendTheme,
  Center,
  Avatar,
  Heading,
  Stack,
  CardBody,
  Card,
  Image,
  CardFooter,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Select,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: 'body',
      },
    },
  },
});

function App() {
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    typeOfEnquiry:'',
    message:'',
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));

    if (id === 'name') {
      setNameError(validateName(value));
    } else if (id === 'email') {
      setEmailError(validateEmail(value));
    }
  };

  const validateName = (name) => {
    return name.trim() ? '' : 'Name is required';
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) ? '' : 'Invalid email address';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nameError || emailError) {
      alert('Please fix the errors in the form.');
      return;
    }
    setShowSuccessMessage(true);
  };

  useEffect(() => {
    const handleSmoothScroll = (event) => {
      event.preventDefault();
      const targetId = event.target.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth',
        });
      }
    };
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach((link) => {
      link.addEventListener('click', handleSmoothScroll);
    });
    return () => {
      internalLinks.forEach((link) => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);
  
  return (
    <>
      <ChakraProvider theme={theme}>
        <Box bg="black" p={4}>
          <Flex justify="space-between" align="center">
            <Flex align="center">
              <Link
                mr={4}
                color="white"
                _hover={{ textDecor: 'underline' }}
                href="ujala21@navgurukul.org"
              >
                <Icon as={FaEnvelope} size="2x" />
              </Link>
              <Link
                mr={4}
                color="white"
                _hover={{ textDecor: 'underline' }}
                href="https://github.com/Ujala-355"
              >
                <Icon as={FaGithub} size="2x" />
              </Link>
              <Link
                color="white"
                _hover={{ textDecor: 'underline' }}
                href="https://www.linkedin.com/in/ujala-saini-072159243/"
              >
                <Icon as={FaLinkedin} size="2x" />
              </Link>
            </Flex>
            <Flex align="center">
              <Link
                href="#projects-section"
                mr={4}
                color="white"
                _hover={{ textDecor: 'underline' }}
              >
                Projects
              </Link>
              <Link
                href="#contactme-section"
                mr={4}
                color="white"
                _hover={{ textDecor: 'underline' }}
              >
                Contact me
              </Link>
            </Flex>
          </Flex>
        </Box>
        <Box>
          <Center bg="teal.500" height="800px">
            <Flex direction="column" align="center">
              <Avatar size="2xl" src="ujala.jpeg" />
              <Text mt={4} fontSize="xl" fontWeight="bold" color="white">
                Ujala saini
              </Text>
              <Text mt={4} fontSize="3xl" fontWeight="bold" color="white">
                A frontend developer<br /> specialised in React
              </Text>
            </Flex>
          </Center>
        </Box>
        <Box bg="#194014" maxheight="800px" border="2px solid yellow">
          <Text id="projects-section" fontSize="2xl" fontWeight="bold" color="white">
            Projects
          </Text>
          <Flex
            direction={{ base: 'column', md: 'row', sm: 'column' }}
            p={8}
            my={8}
            align="center"
            justify="center"
          >
              
                <Card maxW='md' mx={4}>
                  <CardBody>
                    <Image
                      src='https://www.computersciencedegreehub.com/wp-content/uploads/2020/06/In-the-Information-Technology-Sector-What-is-the-Role-of-a-Project-Manager-1024x683.jpg'
                      alt='Green double couch with wooden legs'
                      borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                      <Heading size='md'>Digital-Staff-Management-System. Project</Heading>
                      <Text>
                          Digital Workforce Management System (DWMS)
                          Digital Workforce Management is a platform that connects all 
                          stakeholders in creating a knowledge-based ecosystem.
                      </Text>
                    </Stack>
                  </CardBody>
                  <CardFooter>
                    <Text>See more <ArrowForwardIcon size="1x"/></Text>
                  </CardFooter>
                </Card>
                <Card maxW='md' mx={4}>
                  <CardBody>
                    <Image
                      src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                      alt='Green double couch with wooden legs'
                      borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                      <Heading size='md'>Meraki Project</Heading>
                      <Text>
                          allows you to configure security for Internet-connected
                          devices, routers, switches, firewalls and WiFi networks 
                          your company uses through an internet-connected.
                      </Text>
                    </Stack>
                  </CardBody>
                  <CardFooter>
                    <Text>See more <ArrowForwardIcon size="1x"/></Text>
                  </CardFooter>
                </Card>
          </Flex>
          <Flex
            direction={{ base: 'column', md: 'row', sm: 'column' }}
            p={8}
            my={8}
            align="center"
            justify="center"
          >
              <Card maxW='md' mx={4}>
                  <CardBody>
                    <Image
                        src='https://cdn.pixabay.com/photo/2022/04/17/03/09/skills-7137254_640.jpg'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>Juhi Project</Heading>
                        <Text>
                            We approach each real estate project differently 
                            – working diligently to ensure that each property 
                            has its own unique personality and purpose.
                        </Text>
                    </Stack>
                  </CardBody>
                  <CardFooter>
                      <Text>See more <ArrowForwardIcon size="1x"/></Text>
                  </CardFooter>
              </Card>
              <Card maxW='md' mx={4}>
                  <CardBody>
                    <Image
                      src='https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?cs=srgb&dl=pexels-fauxels-3183153.jpg&fm=jpg'
                      alt='Green double couch with wooden legs'
                      borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>Thoughtspot Project</Heading>
                        <Text>
                            Thoughtspot is a search & AI driven analytics platform 
                            that allows you to get granular insights from billions of rows of data.
                        </Text>
                    </Stack>
                  </CardBody>
                  <CardFooter>
                        <Text>See more <ArrowForwardIcon size="1x"/></Text>
                  </CardFooter>
              </Card> 
          </Flex>
        </Box>
        <Box
            height="1000px"
            bg="#5d27b3"
        >
          {showSuccessMessage && (
            <Alert status="success" width="600px" border="2px solid red" margin="auto">
              <AlertDescription>
              All good! <br/>Thanks for your submission Mark, we will get back to you shortly!
              </AlertDescription>
            </Alert>
          )}
          <Text fontSize="5xl" fontWeight="bold" color="white" mb={6} ml={10} mt={10}>
                  Contact me
              </Text>
          <Box 
              width="90%"
              margin="auto"
          >
              <form onSubmit={handleSubmit} id="contactme-section" border="2px solid blue">
                {nameError || emailError ? (
                  <Alert status="error" mt={4}>
                    <AlertIcon />
                    <AlertTitle mr={2}>Error!</AlertTitle>
                    <AlertDescription>
                      Please fix the errors in the form before submitting.
                    </AlertDescription>
                  </Alert>
                ) : null}

                <FormControl id="name" mb={7} isInvalid={!!nameError}>
                  <FormLabel color="white" fontSize="2xl">
                    Name
                  </FormLabel>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    isRequired
                  />
                  <Text color="red" mt={1} fontSize="sm">
                    {nameError}
                  </Text>
                </FormControl>

                <FormControl id="email" mb={7} isInvalid={!!emailError}>
                  <FormLabel color="white" fontSize="2xl">
                    Email address
                  </FormLabel>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    isRequired
                  />
                  <Text color="red" mt={1} fontSize="sm">
                    {emailError}
                  </Text>
                </FormControl>

                <Text color="white" fontSize="2xl">
                  Type of enquiry
                </Text>
                <Select
                  id="typeOfEnquiry"
                  placeholder="Freelance project proposal"
                  color="pink"
                  mb={4}
                  value={formData.typeOfEnquiry}
                  onChange={handleChange}
                  isRequired
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>

                <FormControl id="message" mb={7}>
                  <FormLabel color="white" fontSize="2xl">
                    Your Message
                  </FormLabel>
                  <Textarea
                    placeholder="Enter your message here"
                    value={formData.message}
                    onChange={handleChange}
                    isRequired
                    color="white"
                    maxwidth="700px"
                    height="200px"
                  />
                </FormControl>
                <Button type="submit" colorScheme="teal" mt={7} width="100%">
                  Submit
                </Button>
              </form>
          </Box>;
        </Box>
        
        <Box height="100px" bg="#000" display="flex" justifyContent="center" alignItems="center">
          <Text fontSize="2xl" color="white">
            Ujala saini @ 2024
          </Text>
        </Box>
      </ChakraProvider>
    </>
  );
}

export default App;
