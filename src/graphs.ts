import * as fs from 'fs'
import { EStatGraphConfigs } from "@mm0202-package/types";

export const graphs: EStatGraphConfigs = {
    '0003417694': {
        statsDataId: '0003417694',
        title: [
            '経済構造実態調査',
            '2019年経済構造実態調査（甲調査）',
            '三次集計',
            '事業所に関する集計2',
            '産業（小分類）別卸売業，小売業の年間商品販売額、本支店間移動の額及び売場面積',
        ],
        series: { classObj: { id: 'tab' } },
        categories: { classObj: { id: 'cat01' }, excludeClassCodes: ['00'] },
        data: {
            classObj: { id: 'tab' },
            defaultClassCode: '11',
        },
        type: [{ type: 'bar', title: 'グラフ' }],
        relatedGraphs: ['0003417693', '0003417695'],
    },
    '0003417695': {
        statsDataId: '0003417695',
        title: [
            '経済構造実態調査',
            '2019年経済構造実態調査（甲調査）',
            '三次集計',
            '事業所に関する集計2',
            '卸売業，小売業別の年間商品販売額、本支店間移動の額及び売場面積―全国、都道府県',
        ],
        series: { classObj: { id: 'tab' } },
        categories: { classObj: { id: 'area' }, excludeClassCodes: ['00000'] },
        data: {
            classObj: { id: 'tab' },
            defaultClassCode: '11',
        },
        conditions: [{ classObj: { id: 'cat01' }, defaultClassCode: '00' }],
        type: [
            { type: 'bar', title: 'グラフ' },
            { type: 'map', title: '地図表示' },
        ],
        relatedGraphs: ['0003417693', '0003417694'],
    },
    '0003417693': {
        statsDataId: '0003417693',
        title: [
            '経済構造実態調査',
            '2019年経済構造実態調査（甲調査）',
            '三次集計',
            '事業所に関する集計1',
            '産業（大分類）別売上（収入）金額―全国、都道府県',
        ],
        series: { classObj: { id: 'cat01' } },
        categories: { classObj: { id: 'area' }, excludeClassCodes: ['00000'] },
        data: {
            classObj: { id: 'cat01' },
            defaultClassCode: '01',
            excludeClassCodes: ['00', '04', '06', '08', '10'],
        },
        dataDisplay: { classObj: { id: 'tab' }, defaultClassCode: '02' },
        type: [
            { type: 'bar', title: 'グラフ' },
            { type: 'map', title: '地図表示' },
        ],
        relatedGraphs: ['0003417695', '0003417694'],
    },
    '0003143513': {
        statsDataId: '0003143513',
        title: [
            '消費者物価指数',
            '2015年基準消費者物価指数1',
            '消費者物価指数（2015年基準）',
        ],
        limitYears: 120,
        series: { classObj: { id: 'area' } },
        data: { classObj: { id: 'tab' }, defaultClassCode: '1' },
        conditions: [
            {
                classObj: { id: 'area' },
                defaultClassCode: '00000',
                category: '地域',
            },
            {
                classObj: { id: 'cat01' },
                defaultClassCode: '0001',
                category: '品目',
                lv: '1',
            },
        ],
        note: '※ 地域によっては、取得できない品目データがあります。'
    },
    '0003090660': {
        statsDataId: '0003090660',
        title: ['自動車輸送統計調査', '自動車輸送統計月報', '旅客輸送', '原単位'],
        limitYears: 70,
        series: { classObj: { id: 'cat02' } },
        data: { classObj: { id: 'cat01' }, defaultClassCode: '00001' },
    },
    '0003090589': {
        statsDataId: '0003090589',
        title: [
            '自動車輸送統計調査',
            '自動車輸送統計月報',
            '旅客輸送',
            '地方運輸局別・車種別輸送人員',
        ],
        limitYears: 25,
        series: { classObj: { id: 'area' } },
        data: { classObj: { id: 'cat01' }, defaultClassCode: '00001' },
    },
    '0003090661': {
        statsDataId: '0003090661',
        title: [
            '自動車輸送統計調査',
            '自動車輸送統計月報',
            '旅客輸送',
            '地方運輸局別・車種別輸送人キロ',
        ],
        limitYears: 25,
        series: { classObj: { id: 'area' } },
        data: { classObj: { id: 'cat01' }, defaultClassCode: '00001' },
    },
}

fs.writeFileSync('config/graphs.json', JSON.stringify(graphs))