export interface BlogType {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: {
    asset: {
      url: string;
    };
  };
}

export interface BlogDetailType {
  currentSlug: string;
  title: string;
  content: Array<{
    _type: string;
    children: Array<{
      text: string;
    }>;
  }>;
  titleImage: {
    asset: {
      url: string;
    };
  };
}
