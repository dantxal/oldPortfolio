// Type definitions for dantxal's Portfolio v2.0
// Project: dantxal's Portfolio
// Definitions by: dantxal <dantxal.com>
export {}

declare global {

  type ProjectImage = {
    src: string
    caption: string
  }
  interface IProject {
    name: string
    scope: string
    techs: string[]
    description: string
    links: Record<string, string>,
    images: ProjectImage[]
  }
}
