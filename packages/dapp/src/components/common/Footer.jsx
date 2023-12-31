import { Box, Flex, HStack, Image, Text, useBreakpointValue } from '@chakra-ui/react';
import logo from 'assets/logo.svg';
// import { BiticaBridgeIcon } from 'icons/BiticaBridgeIcon';
// import { GithubIcon } from 'icons/GithubIcon';
// import { GnosisChainIcon } from 'icons/GnosisChainIcon';
import { RaidGuildIcon } from 'icons/RaidGuildIcon';
import { TelegramIcon } from 'icons/TelegramIcon';
import { TwitterIcon } from 'icons/TwitterIcon';
import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const smallScreen = useBreakpointValue({ base: true, sm: false });
  return (
    <Flex
      position="relative"
      justify={{ base: 'center', sm: 'space-between' }}
      align="center"
      h={20}
      maxW="75rem"
      px={8}
      w="100%"
      color="grey"
    >
      {!smallScreen && (
        <Link to="/" display={{ base: 'none', sm: 'block' }}>
          <Flex
            justify="space-around"
            align="center"
            _hover={{ color: 'purple' }}
            transition="0.25s"
          >
            {/* <BiticaBridgeIcon w={6} /> */}
            <Image src={logo} cursor="pointer" boxSize='30px' />
          </Flex>
        </Link>
      )}
      <HStack spacing={4}>
        <Box _hover={{ color: 'sunray.500' }} transition="0.25s">
          <a
            href="https://explorer.prmscan.org/"
            rel="noreferrer noopener"
            target="_blank"
          >
            {/* <BiticaBridgeIcon boxSize="1.25rem" /> */}
            <Image src={logo} cursor="pointer" boxSize='30px' />
          </a>
        </Box>
        <Box _hover={{ color: 'sunray.500' }} color='tan' transition="0.25s">
          <a
            href="https://twitter.com/PRMCoin"
            rel="noreferrer noopener"
            target="_blank"
          >
            <TwitterIcon />
          </a>
        </Box>
        <Box _hover={{ color: 'sunray.500' }} color='tan' transition="0.25s">
          <a
            href="https://t.me/OfficialPRM"
            rel="noreferrer noopener"
            target="_blank"
          >
            <TelegramIcon />
          </a>
        </Box>
        {/* <Box _hover={{ color: 'purple' }} transition="0.25s">
          <a
            href="https://github.com/omni"
            rel="noreferrer noopener"
            target="_blank"
          >
            <GithubIcon />
          </a>
        </Box> */}
        <Box w="1px" h={5} background="tan" />
        <a
          href="https://vindax.com"
          rel="noreferrer noopener"
          target="_blank"
        >
          <Flex
            align="center"
            _hover={{ color: 'sunray.500' }}
            color='tan'
            transition="0.25s"
          >
            <Text>Built by</Text>
            <RaidGuildIcon boxSize={16} ml={2} />
          </Flex>
        </a>
      </HStack>
    </Flex>
  );
};
