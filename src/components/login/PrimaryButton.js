import Button from '@material-ui/core/Button'

const PrimaryButton = (props) => {
    return (
        <div className=" hover:bg-blue-dark text-white font-bold py-2 px-4 rounded">
            <Button className="bg-gray-600" variant="contained" onClick={() => props.onClick()}>
                {props.label}
            </Button>
        </div>
    )
}

export default PrimaryButton;