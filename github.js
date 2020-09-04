// Building class 
class Github {
  constructor() {
    this.client_id = 'Iv1.c2fdb5e146f5b9db';
    this.client_secret = 'bee44a04deb7001c2dc13e46a457785bb5f7d484'
  }
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret${this.client_secret}`);

    const profile = await profileResponse.json();
    
    return {
      profile
  }

}}