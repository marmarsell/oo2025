import { Person } from "./Person"

export type Result = {
    id: number,
    sportsman: Person,
    totalPoints: number,

    run100m: number,
    run110mHurdles: number,
    run400m: number,
    run1500m: number,

    discusThrow: number,
    javelinThrow: number,
    shotPut: number,

    highJump: number,
    longJump: number,
    poleVault: number
}