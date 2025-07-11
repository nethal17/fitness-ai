import { SignedIn, SignInButton, SignOutButton, SignedOut } from '@clerk/nextjs';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      HomePage
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <SignOutButton />
      </SignedIn>
    </div>
  );
};

export default HomePage;