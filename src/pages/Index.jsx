import { Box, Button, Container, Flex, Heading, Image, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} justify="space-between" align="center">
        <Heading size="md">Sunglasses Auction</Heading>
        <Flex>
          <Link href="/" p={2}>Home</Link>
          <Link href="/auctions" p={2}>Auctions</Link>
          <Link href="/contact" p={2}>Contact</Link>
        </Flex>
      </Flex>

      {/* Hero Section */}
      <Box as="section" bg="blue.600" color="white" py={20} textAlign="center">
        <Heading size="2xl" mb={4}>Find Your Perfect Sunglasses</Heading>
        <Text fontSize="xl" mb={6}>Bid on the latest and greatest sunglasses from top brands.</Text>
        <Button colorScheme="teal" size="lg">Start Bidding</Button>
      </Box>

      {/* Featured Sunglasses Section */}
      <Box as="section" py={10}>
        <Heading size="xl" textAlign="center" mb={10}>Featured Sunglasses</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="/images/sunglasses1.jpg" alt="Sunglasses 1" />
            <Box p={6}>
              <Heading size="md" mb={2}>Ray-Ban Aviator</Heading>
              <Text mb={4}>Current Bid: $120</Text>
              <Button colorScheme="teal">Place Bid</Button>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="/images/sunglasses2.jpg" alt="Sunglasses 2" />
            <Box p={6}>
              <Heading size="md" mb={2}>Oakley Holbrook</Heading>
              <Text mb={4}>Current Bid: $150</Text>
              <Button colorScheme="teal">Place Bid</Button>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="/images/sunglasses3.jpg" alt="Sunglasses 3" />
            <Box p={6}>
              <Heading size="md" mb={2}>Maui Jim</Heading>
              <Text mb={4}>Current Bid: $200</Text>
              <Button colorScheme="teal">Place Bid</Button>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" py={10} textAlign="center">
        <Flex justify="center" mb={4}>
          <Link href="https://facebook.com" isExternal mx={2}><FaFacebook size="24px" /></Link>
          <Link href="https://twitter.com" isExternal mx={2}><FaTwitter size="24px" /></Link>
          <Link href="https://instagram.com" isExternal mx={2}><FaInstagram size="24px" /></Link>
        </Flex>
        <Text>&copy; 2023 Sunglasses Auction. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;