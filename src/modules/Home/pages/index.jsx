import { Box, Button, Card, Center, Field, Fieldset, Flex, Grid, Heading, Image, Input, Stack, Text, Textarea, VStack } from "@chakra-ui/react";
import ContentMain from "../../../components/ContentMain";
import { FaWhatsapp } from "react-icons/fa";
import proyectos from "../../Proyectos/data/proyectos_data.json";
import servicios from "../../Servicios/data/servicios_data.json";
import emailjs from "emailjs-com"
import { useState } from "react";
import useAlert from "../../../hooks/useAlert";

const Home = () => {
    const {successAlert} = useAlert();
    const [form, setForm] = useState({
        nombres: "",
        correo: "",
        celular: "",
        consulta: ""
    });
    const [errors, setErrors] = useState({});

    const validateFields = () => {
        const err = {};

        if(form?.nombres?.length === 0) err["nombres"] = "El campo nombres es requerido";
        if(form?.correo?.length === 0) err["correo"] = "El campo correo es requerido";
        if(form?.celular?.length === 0) err["celular"] = "El campo celular es requerido";
        if(form?.consulta?.length === 0) err["consulta"] = "El campo consulta es requerido";

        setErrors(err);

        return err;
    }

    const handleChange = e => {
        const {name, value} = e.target;

        setForm({
            ...form,
            [name]: value
        });
    }

    const save = () => {
        if(Object.keys(validateFields()).length === 0) {
            emailjs.send("service_ads46ws", "contact_form", form, "user_K6UnZJdZyuu3EyXtxmeO2")
            .then((res) => {
                setForm({
                    nombres: "",
                    correo: "",
                    celular: "",
                    consulta: ""
                });

                successAlert({text: "Nos pondremos en contacto a la brevedad"});
            }).catch((err) => {
                alert("Error al registrar")
            });
        }

    }

    return <ContentMain>
        <Box paddingY={12}>
            <Heading size={"3xl"} className="title" marginBottom={6} paddingX={2}>Comprometidos con la mejora de tu Negocio en el mundo Dígital</Heading>
            <Text marginBottom={6} className="paragraph textCenter" paddingX={2}>Desarrollo de Sitios y Aplicaciones Web para tu negocio.</Text>
            <Flex justifyContent={"center"}>
                <Button variant={"solid"} background={"blue.900"} paddingX={4} boxShadow={"lg"} _hover={{ background: "blue.950" }}>
                    <FaWhatsapp />
                    Trabajemos Juntos
                </Button>
            </Flex>
        </Box>

        <Box paddingY={12}>
            <Heading size={"2xl"} className="title" marginBottom={6} paddingX={2}>Servicios</Heading>

            <Grid
                 gap={{base: "12", md: "2"}}
                 templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", xxl: "repeat(4, 1fr)" }}
                 placeItems={"center"}
            >
                {
                    servicios.map((servicio, index) => {
                        return <Card.Root key={index} width={"320px"} boxShadow={"lg"} gap={2} rounded={"lg"} overflow={"hidden"}>
                            <Image
                                src={servicio.image}
                                loading="lazy"
                                width={"auto"}
                                height={240}
                            />

                            <Card.Body gap={4} padding={4}>
                                <Card.Title>{servicio.nombre}</Card.Title>
                                <Card.Description>{servicio.descripcion}</Card.Description>
                            </Card.Body>
                        </Card.Root>
                    })
                }
            </Grid>
        </Box>

        <Box paddingY={12}>
            <Heading size={"2xl"} className="title" marginBottom={6} paddingX={2}>Nuestros Proyectos</Heading>

            <Grid
                gap={{base: "12", md: "10"}}
                templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", xxl: "repeat(4, 1fr)" }}
                placeItems={"center"}
            >
                {
                    proyectos.map((proyecto, index) => {
                        return <Card.Root key={index} width={"320px"} boxShadow={"lg"} gap={2} rounded={"lg"} overflow={"hidden"}>
                            <Image
                                src={proyecto.image}
                                loading="lazy"
                                width={"auto"}
                                height={240}
                            />

                            <Card.Body gap={4} padding={4}>
                                <Card.Title>{proyecto.nombre}</Card.Title>
                                <Card.Description>{proyecto.descripcion}</Card.Description>
                            </Card.Body>
                        </Card.Root>
                    })
                }
            </Grid>
        </Box>

        <Box paddingY={12}>
            <Heading size={"2xl"} className="title" marginBottom={6} paddingX={2}>¿Tienes dudas?</Heading>

            <Card.Root padding={6} gap={8} width={"320px"} margin={"auto"}>
                <Field.Root invalid={!!errors?.nombres}>
                    <Input variant={"flushed"} placeholder="Nombres y Apellidos" onChange={handleChange} value={form?.nombres} name="nombres" autoComplete="off" />
                    <Field.ErrorText>{errors?.nombres}</Field.ErrorText>
                </Field.Root>

                <Field.Root invalid={!!errors?.correo}>
                    <Input variant={"flushed"} placeholder="Correo" onChange={handleChange} value={form?.correo} name="correo" autoComplete="off" />
                    <Field.ErrorText>{errors?.correo}</Field.ErrorText>
                </Field.Root>

                <Field.Root invalid={!!errors?.celular}>
                    <Input variant={"flushed"} placeholder="Celular" onChange={handleChange} value={form?.celular} name="celular" autoComplete="off" />
                    <Field.ErrorText>{errors?.celular}</Field.ErrorText>
                </Field.Root>

                <Field.Root invalid={!!errors?.consulta}>
                    <Textarea variant={"flushed"} placeholder="¿Cuál es tu consulta?" size={"lg"} rows={4} onChange={handleChange} value={form?.consulta} name="consulta" autoComplete="off" /> 
                    <Field.ErrorText>{errors?.consulta}</Field.ErrorText>
                </Field.Root>

                <Button onClick={save}>Enviar</Button>
            </Card.Root>
        </Box>
    </ContentMain>
}

export default Home;