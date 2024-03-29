"use client";

import Header from "@/components/Header";
import React, { useEffect } from "react";
import Image from "next/image";
import { useUser } from "@/hooks/useUser";

const AccountPage = () => {
  const user = useUser();

  return (
    <div
      className="
      bg-neutral-900
      rounded-lg
      h-full
      w-full
      overflow-hidden
      overflow-y-auto">
      <Header>
        <div className="mt-20">
          <div
            className="
            flex
            flex-col
            md:flex-row
            items-center
            gap-x-5">
            <div
              className="
              relative
              h-32
              w-32
              lg:h-44
              lg:w-44">
              <Image
                className="object-cover"
                fill
                src="/images/liked.png"
                alt="Playlist"
              />
            </div>
            <div
              className="
              flex
              flex-col
              gap-y-2
              mt-4
              md:mt-0">
              <p
                className="
                hidden md:block font-semibold text-sm">
                {user.user?.email}
              </p>
              <h1
                className="
                 text-white
                text-4xl
                sm:text-5xl
                lg:text-7xl
                font-bold
              ">
                User information
              </h1>
            </div>
          </div>
        </div>
      </Header>
      <div></div>
    </div>
  );
};

export default AccountPage;
