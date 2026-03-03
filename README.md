# ABRA CRM Frontend

Microfrontend del módulo **ABRASION ASTM C535-16** para Geofal.

- Dominio productivo: `https://abra.geofal.com.pe`
- Backend API: `https://api.geofal.com.pe` (rutas `/api/abra`)

## Objetivo

- Registrar/editar ensayos de abrasión Los Angeles.
- Guardar estado en BD (`EN PROCESO`/`COMPLETO`).
- Exportar Excel con plantilla oficial `Template_ABRA.xlsx`.
- Cerrar modal del CRM al finalizar guardado.

## Stack

- Vite + React + TypeScript
- Tailwind CSS
- Axios
- React Hot Toast

## Variables de entorno

- `VITE_API_URL=https://api.geofal.com.pe`
- `VITE_CRM_LOGIN_URL=https://crm.geofal.com.pe/login`

## Desarrollo local

```bash
npm install
npm run dev
```
