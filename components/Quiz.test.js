const rewire = require("rewire")
const Quiz = rewire("./Quiz")
const mapStateToProps = Quiz.__get__("mapStateToProps")
// @ponicode
describe("mapStateToProps", () => {
    test("0", () => {
        let callFunction = () => {
            mapStateToProps(["Spectacled Caiman", "Saltwater Crocodile", "Saltwater Crocodile"], { navigation: { state: { params: { id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" } } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            mapStateToProps(["Nile Crocodile", "Australian Freshwater Crocodile", "Australian Freshwater Crocodile"], { navigation: { state: { params: { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" } } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            mapStateToProps(["Dwarf Crocodile", "Dwarf Crocodile", "Australian Freshwater Crocodile"], { navigation: { state: { params: { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" } } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            mapStateToProps(["Nile Crocodile", "Nile Crocodile", "Australian Freshwater Crocodile"], { navigation: { state: { params: { id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" } } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            mapStateToProps(["Dwarf Crocodile", "Dwarf Crocodile", "Australian Freshwater Crocodile"], { navigation: { state: { params: { id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" } } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            mapStateToProps(undefined, { navigation: undefined })
        }
    
        expect(callFunction).not.toThrow()
    })
})
