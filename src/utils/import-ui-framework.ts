import { App } from 'vue'
import { ElIcon, ElLoading, ElCard, ElButton } from 'element-plus'

export default function importUiFramework(app: App) {
  // Load the Element Plus components as needed
  app.use(ElButton).use(ElCard).use(ElLoading).use(ElIcon)
  return app
}
