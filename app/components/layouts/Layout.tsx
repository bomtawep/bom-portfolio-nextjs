import { Content } from "../items/Content"
import { Box } from "../items/Box";

export const Layout = ( {children}: any) => (
  <Box
    css={{
      maxW: "100%"
    }}
  >
    {children}
    <Content />
  </Box>
);