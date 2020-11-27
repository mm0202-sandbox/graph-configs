type ClassObjId =
    | 'tab'
    | 'time'
    | 'area'
    | 'cat01'
    | 'cat02'
    | 'cat03'
    | 'cat04'
    | 'cat05'
    | 'cat06'
    | 'cat07'
    | 'cat08'
    | 'cat09'
    | 'cat10'
    | 'cat11'
    | 'cat12'
    | 'cat13'
    | 'cat14'
    | 'cat15'

export type Condition = {
    classObj: { id: ClassObjId }
    defaultClassCode?: string
    category?: string
    lv?: string
    excludeClassCodes?: string[]
}

export type Type = 'map' | 'timeSeries' | 'bar'

export type GraphType = {
    statsDataId: string
    title: string[]
    limitYears?: number
    series: { classObj: { id: ClassObjId } }
    categories?: Condition
    data: Condition
    dataDisplay?: Condition
    conditions?: Condition[]
    note?: string
    type?: { type: Type; title?: string }[]
    relatedGraphs?: string[]
}

export type GraphConfigsType = { [id: string]: GraphType }
