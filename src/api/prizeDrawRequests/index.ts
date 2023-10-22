import instanceAPI from "../conect";

export async function getAllLottery() {
    return await instanceAPI({method: "GET", incrementURL: "/api"})
}

export async function getResultLottery(lottery: string): Promise<Contest[]>{
    return await instanceAPI({method: "GET", incrementURL: `/api/${lottery}`})
}

export async function getResultLotteryWithContest(lottery: string, contest: string) {
    return await instanceAPI({method: "GET", incrementURL: `/api/${lottery}/${contest}`})
}

export async function getResultLatest(lottery: string):Promise<Contest> {
    return await instanceAPI({ method: "GET", incrementURL: `/api/${lottery}/latest`})
}

