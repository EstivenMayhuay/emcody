import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { Box, Text } from "@chakra-ui/react";
import Menu from "./components/Menu";

const App = () => {
    const routing = useRoutes(routes);

    return <Box background={"gray.200"} height={"100%"}>
        <Menu />

        {routing}

        <Box
            padding={4}
            background={"blue.950"}
        >
            <Text textAlign={"center"} color={"white"}>Todos los derechos reservados © Emcody 2025</Text>
        </Box>
    </Box>
}

export default App
