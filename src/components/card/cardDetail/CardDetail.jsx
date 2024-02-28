import { Link, useParams } from "react-router-dom";
import { projects } from "../../data/Data";
import { Box, Button, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

function CardDetail() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isLightMode, setIsLightMode] = useState(true);

  useEffect(() => {
    setIsLightMode(colorMode === "light");
  }, [colorMode]);

  const params = useParams();
  console.log(params);
  return (
    <>
      <Box
        as="nav"
        pos={"fixed"}
        top="0"
        display="flex"
        w={{md:"70%", base: "90%"}}
        h="fit-content"
        pt={2}
        alignItems="center"
        justifyContent="space-between"
        mb={4}
      >
        <Link to="/blog">
          <Button>Back</Button>
        </Link>
        <Button onClick={toggleColorMode}>
          {isLightMode ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Box>
      <div>{projects[params.id].title}</div>
    </>
  );
}

export default CardDetail;
