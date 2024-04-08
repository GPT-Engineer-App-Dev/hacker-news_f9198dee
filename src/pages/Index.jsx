import React from "react";
import { Box, Container, Heading, List, ListItem, Link, Text, Divider, useColorModeValue, IconButton, Flex } from "@chakra-ui/react";
import { FaHackerNews, FaRegCommentAlt, FaHeart, FaExternalLinkAlt } from "react-icons/fa";

const Index = () => {
  // Fake news data, in a real app this would come from an API
  const newsItems = [
    {
      id: 1,
      title: "The Evolution of Async JavaScript: From Callbacks, to Promises, to Async/Await",
      url: "https://blog.example.com/async-js",
      points: 123,
      author: "johndoe",
      comments: 42,
    },
    // ...additional news items
  ];

  const listItemBg = useColorModeValue("gray.100", "gray.700");

  return (
    <Container maxW="container.md" py={5}>
      <Flex align="center" mb={5}>
        <FaHackerNews size="2rem" color="#FF6600" />
        <Heading as="h1" size="lg" ml={3}>
          Hacker News Clone
        </Heading>
      </Flex>
      <List spacing={3}>
        {newsItems.map((item) => (
          <ListItem key={item.id} bg={listItemBg} p={4} borderRadius="lg">
            <Flex justify="space-between" align="center">
              <Box>
                <Link href={item.url} isExternal>
                  {item.title} <FaExternalLinkAlt mx="2px" />
                </Link>
                <Text fontSize="sm">
                  {item.points} points by {item.author}
                </Text>
              </Box>
              <IconButton icon={<FaRegCommentAlt />} aria-label="Comments" size="sm" variant="ghost" />
            </Flex>
            <Divider my={2} />
            <Flex align="center">
              <FaHeart color="red" />
              <Text ml={1} fontSize="sm">
                {item.comments} comments
              </Text>
            </Flex>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Index;
