function ConfigurationTest() {
    const nodeEnv = process.env.NODE_ENV || "(null)";
    const testVariable = process.env.REACT_APP_TEST_VARIABLE || "(null)";

    return (
        <div>
            nodeEnv: {nodeEnv}
            <br />
            testVariable: {testVariable}
            <br />
        </div>
    )
}

export default ConfigurationTest