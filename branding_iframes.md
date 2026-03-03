# Branding Iframes - ABRA

Documento de referencia para mantener consistente el branding del microfrontend de **ABRASION** y su visualización embebida en iframe dentro del CRM.

## Alcance

- Microfrontend: `abra-crm`
- Shell embebedor: `crm-geofal` módulo ABRA
- Flujo: CRM abre `https://abra.geofal.com.pe` en dialog modal con `token` y opcionalmente `ensayo_id`

## Reglas visuales

- Mantener estructura de hoja técnica fiel a `Template_ABRA.xlsx`.
- Preservar encabezado institucional y bloque ASTM C535-16.
- Mantener consistencia visual con módulos recientes de laboratorio.
- Botonera final con acciones `Guardar` y `Guardar y Descargar`.

## Contrato iframe

- Entrada por query params: `token`, `ensayo_id`.
- Mensajes hijo -> padre: `TOKEN_REFRESH_REQUEST`, `CLOSE_MODAL`.
- Mensaje padre -> hijo: `TOKEN_REFRESH`.
