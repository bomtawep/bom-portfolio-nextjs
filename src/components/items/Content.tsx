import { Card, Text, Grid } from "@nextui-org/react";

export const Content = () => (
  <Grid.Container xs={12} justify='center'>
    <Card
      isPressable
      isHoverable
      variant="bordered"
      css={{ mw: "500px" }}
    >
      <Card.Body>
        <Text>A pressable card.</Text>
      </Card.Body>
    </Card>
  </Grid.Container>
)
