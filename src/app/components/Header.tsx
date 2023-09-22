"use client";
import Link from "next/link";
import styled from "styled-components";
import tw from "tailwind-styled-components";

const Header = () => {
  return (
    <HeaderTag>
      <Container>dd</Container>
    </HeaderTag>
  );
};

export default Header;

const HeaderTag = tw.header`
  z-[999]
  relative
`;
const Container = tw.div`
  fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full
`;
