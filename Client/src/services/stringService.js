const StringService = {

    removeWhiteSpace(str) {
        const cleanStr = str.replace(/\s/g, "").trim();
        return cleanStr;
    }
}


export default StringService;