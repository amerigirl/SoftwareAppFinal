/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';

function index() {
  const router = useRouter();

  useEffect(() => {
  
       router.replace("/about")
  }, [router]);
  
  return null;
}
export default index;
