import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

const mySwal = withReactContent(Swal);

const successAlert = ({
    text = ""
}) => {
    mySwal.fire({
        icon: "success",
        title: "Enviado",
        text: text 
    })
}

const useAlert = () => {
    return {
        successAlert
    }
}

export default useAlert;