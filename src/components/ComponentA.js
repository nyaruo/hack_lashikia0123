import { useNavigate } from 'react-router-dom'
import { useStateContext } from '../context/StateProvider'
import Unity, { UnityContent } from 'react-unity-webgl';

const unityContent = new UnityContent(
    'Build/sample2.json',
    'Build/UnityLoader.js'
);

const ComponentA = () => {
    const navigate = useNavigate()
    const { isOn, setIsOn } = useStateContext()

    return (
        <div>
            <div className="flex justify-center items-center flex-col">
                <p className="font-bold my-1">ComponentA</p>
                <p onClick={() => navigate('/')}>Go Root</p>
                on? off?:{isOn ? 'on' : 'off'}
                <button
                    type="button"
                    className="bg-gray-600 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
                    onClick={() => setIsOn((isOn) => !isOn)}
                >
                    toggle
                </button>
            </div>
            <div class>
                <div style={{ height: "600px", width: "700px" }}>
                    <Unity unityContent={unityContent} />
                </div>
                <div>
                    <div style={{ height: "300px" }}></div>
                    <img
                        id="capture"
                        src="TemplateData/dummy.png"
                        width="240px"
                        height="150px"
                    />
                </div>
            </div>
        </div >
    )
}

export default ComponentA