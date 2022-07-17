import { useState } from "react";
import { LoadingOverlay, Button, Group } from "@mantine/core";

function Demo() {
  const [visible, setVisible] = useState(false);

  // Note that position: relative is required
  return (
    <>
      <div style={{ width: 400, position: "relative" }}>
        <LoadingOverlay visible={visible} transitionDuration={500} />
        {/* ...other content */}
      </div>

      <Group position="center">
        <Button onClick={() => setVisible((v) => !v)}>Toggle overlay</Button>
      </Group>
    </>
  );
}
export default Demo;
