'use client'
import React, { useEffect, useState } from 'react';
import { getDocumentTheme, createTheme, NextUIProvider } from '@nextui-org/react'
import Navigation from '../src/components/navigation/Navigation'

const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: { white: '#FFFFFF' }
  }
})

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: { black: '#000000' }
  }
})

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  

  useEffect(() => {
    let theme = window.localStorage.getItem('data-theme');
    setIsDark(theme === 'dark');

    const observer = new MutationObserver((mutation) => {
      let newTheme = getDocumentTheme(document?.documentElement);
      setIsDark(newTheme === 'dark');
    });

    observer.observe(document?.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme', 'style']
    });

    return () => observer.disconnect();
  }, []);

  return (
    <NextUIProvider theme={isDark ? darkTheme : lightTheme}>
      <Navigation />
    </NextUIProvider>
    
  )
}
