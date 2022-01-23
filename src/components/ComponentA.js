
import Unity, { UnityContent } from 'react-unity-webgl';

const unityContent = new UnityContent(
    'Build/SNS_stamp.json',
    'Build/UnityLoader.js'
);

const ComponentA = () => {

    return (
        <div>
            <div style={{ height: "100px" }} ></div>
            <div className="flex justify-center items-center flex-col">
            </div>
            <div class>
                <div style={{ height: "600px", width: "700px" }}>
                    <Unity unityContent={unityContent} />
                </div>
                <div>
                    <div style={{ height: "300px", textAlign: 'center' }}></div>
                    <img
                        id="capture"
                        src="TemplateData/dummy.png"
                        height="150px"

                    />
                </div>
            </div>
        </div >
    )
}

export default ComponentA