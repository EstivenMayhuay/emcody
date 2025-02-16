import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaBars, FaXmark } from "react-icons/fa6"
import { useState } from "react";
import "./menu.css";

const Menu = () => {
    const [openMenu , setOpenMenu] = useState(false);

    const closeMenu = () => setOpenMenu(false);

    return <Box
            background={"blue.950"}
            padding={5}
            w={{ base: 'full'}}
        >
            <Flex alignItems={"center"} gap={3}>
                {/* <FaBars color="white" size={30} onClick={() => setOpenMenu(true)} />                 */}
                <Text color={"white"} fontWeight={600}>EMCODY</Text>
            </Flex>

            <Box className={`menu ${openMenu ? "active" : ""}`} background={"blue.900"} padding={4} boxShadow={"lg"} >
                <FaXmark color="white" size={30} onClick={() => setOpenMenu(false)} style={{marginBottom: "2rem"}} />

                <li className="menu__item">
                    <Link color="white" to={"/"} onClick={closeMenu}>Inicio</Link>
                </li>

                <li className="menu__item">
                    <Link to={"/servicios"} onClick={closeMenu}>Servicios</Link>
                </li>

                <li className="menu__item">Nosotros</li>
            </Box>
    </Box>   
}

export default Menu;