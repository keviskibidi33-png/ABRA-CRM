export interface AbraPayload {
    muestra: string
    numero_ot: string
    fecha_ensayo: string
    realizado_por: string

    masa_muestra_inicial_g?: number | null
    masa_muestra_inicial_seca_g?: number | null
    masa_muestra_inicial_seca_constante_g?: number | null
    requiere_lavado?: "SI" | "NO" | "-" | null
    tmn?: string | null
    masa_12_esferas_g?: number | null

    gradacion_1_tamiz_g: Array<number | null>
    gradacion_2_tamiz_g: Array<number | null>
    gradacion_3_tamiz_g: Array<number | null>

    item_a_masa_original_g: Array<number | null>
    item_b_masa_retenida_tamiz_12_g: Array<number | null>
    item_c_masa_lavada_seca_retenida_g: Array<number | null>
    item_d_masa_lavada_seca_constante_g: Array<number | null>
    item_e_diferencia_masa_g: Array<number | null>
    item_f_desgaste_pct: Array<number | null>
    item_perdida_lavado_pct: Array<number | null>

    horno_codigo?: string | null
    maquina_los_angeles_codigo?: string | null
    balanza_1g_codigo?: string | null
    malla_no_12_codigo?: string | null
    malla_no_4_codigo?: string | null

    observaciones?: string | null
    revisado_por?: string | null
    revisado_fecha?: string | null
    aprobado_por?: string | null
    aprobado_fecha?: string | null
}

export interface AbraEnsayoSummary {
    id: number
    numero_ensayo: string
    numero_ot: string
    cliente?: string | null
    muestra?: string | null
    fecha_documento?: string | null
    estado: string
    desgaste_promedio_pct?: number | null
    bucket?: string | null
    object_key?: string | null
    fecha_creacion?: string | null
    fecha_actualizacion?: string | null
}

export interface AbraEnsayoDetail extends AbraEnsayoSummary {
    payload?: AbraPayload | null
}

export interface AbraSaveResponse {
    id: number
    numero_ensayo: string
    numero_ot: string
    estado: string
    desgaste_promedio_pct?: number | null
    bucket?: string | null
    object_key?: string | null
    fecha_creacion?: string | null
    fecha_actualizacion?: string | null
}
