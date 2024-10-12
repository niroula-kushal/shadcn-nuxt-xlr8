declare module '#app' {
    interface PageMeta {
      allowAnonymous?: boolean = false
    }
  }
  
  // It is always important to ensure you import/export something when augmenting a type
  export {}
  