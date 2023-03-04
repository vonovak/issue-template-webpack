import React from 'react';
import { Input, styled, TamaguiProvider } from 'tamagui';
import config from '../tamagui.config';

const TransparentInput = styled(Input, {
  borderColor: 'transparent',
  borderWidth: 0,
  hoverStyle: {
    borderColor: 'transparent',
    borderWidth: 0,
  },
  focusStyle: {
    borderColor: 'transparent',
    borderWidth: 0,
  },
});

export default function Application() {
  return (
    <TamaguiProvider
      config={config}
      disableRootThemeClass
      defaultTheme="dark"
    >
      <TransparentInput placeholder="transparent border 0px"/>
      <Input placeholder="default input" />
    </TamaguiProvider>
  );
}
