import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import { MdBlock, MdDone } from "react-icons/md";
import React, { useState } from "react";

export default function BoxComentarios({ id, comentario }) {
  const [visible, setVisible] = useState(false);
  return (
    <Box
      class="caja"
      boxShadow="dark-lg"
      backgroundColor="gray.100"
      m={3}
      borderRadius="10"
      borderWidth="3px"
      overflow="hidden"
    >
      <Box class="texto">
        <h1>{comentario}</h1>
      </Box>
      <Box class="abajo">
        <ButtonGroup>
          <Button leftIcon={<MdDone />} colorScheme="red" variant="solid">
            Aceptar
          </Button>
          <Button
            leftIcon={<MdBlock />}
            colorScheme="red"
            variant="solid"
            onClick={() => setVisible(!visible)}
          >
            {visible ? "Bloquear" : "Desbloquear"}
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
}
