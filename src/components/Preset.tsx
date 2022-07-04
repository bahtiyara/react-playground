function Preset() {
    const Order = () => <div>Order</div>
    const PreSuffix = () => <div>PreSuffix</div>
    const MinMax = () => <div>MinMax</div>

    return (
        <div
            style={{ display: "flex", flexDirection: "column" }}
            className="preset"
        >
            <h3>Preset</h3>
            <Order />
            <PreSuffix />
            <MinMax />
        </div>
    )
}

export default Preset
