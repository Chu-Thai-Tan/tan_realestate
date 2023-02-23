import React from "react";
import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
  Flex,
  Box,
  Spacer,
  HStack,
  Button,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";

const Navbar = () => {
  const [isSmallerThan800] = useMediaQuery("(max-width: 800px)");

  const linkList = [
    { title: "Home", icon: <FcHome />, href: "/" },
    { title: "Search", icon: <BsSearch />, href: "/search" },
    {
      title: "Buy Property",
      icon: <FcAbout />,
      href: "/search?purpose=for-sale",
    },
    {
      title: "Rent Property",
      icon: <FiKey />,
      href: "/search?purpose=for-rent",
    },
  ];

  let menu;

  if (isSmallerThan800) {
    menu = (
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<FcMenu />}
          variant="outline"
          color="red.400"
        />
        <MenuList>
          {linkList.map((linkItem) => (
            <Link href={linkItem.href} passHref key={linkItem.href}>
              <MenuItem icon={linkItem.icon}>{linkItem.title}</MenuItem>
            </Link>
          ))}
        </MenuList>
      </Menu>
    );
  } else {
    menu = (
      <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
        {linkList.map((linkItem) => (
          <Link href={linkItem.href} passHref key={linkItem.href}>
            <Button>
              {linkItem.icon}
              <Text paddingLeft="16px">{linkItem.title}</Text>
            </Button>
          </Link>
        ))}
      </HStack>
    );
  }

  return (
    <Flex p="2" borderBottom="1px" borderColor="gray.100">
      <Box fontSize="3xl" color="blue.400" fontWeight="bold">
        <Link href="/" paddingLeft="2">
          Realtor
        </Link>
      </Box>
      <Spacer />
      <Box>{menu}</Box>
    </Flex>
  );
};

export default Navbar;
