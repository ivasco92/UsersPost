
export class Post {
  userId: number;
  id: number;
  title: string;
  body: string;

  static fromJson(json: any): Post {
    const post = new Post();
    post.id = json.id;
    post.body = json.body;
    post.title = json.title;
    post.userId = json.userId;
    return post;
  }
}


