import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class ComponentsService {
  constructor(private angularFirestore: AngularFirestore) {}

  getRandomNicknames() {
    return this.angularFirestore
      .collection('random-nicknames')
      .snapshotChanges();
  }
  getTopFifty() {
    return this.angularFirestore.collection('top-fifty').snapshotChanges();
  }
  getPopularityTrends() {
    return this.angularFirestore
      .collection('popularity-trends')
      .snapshotChanges();
  }
  // createRandomNicknames(nickname: any) {
  //   return this.angularFirestore.collection('random-nicknames').add(nickname);
  // }
}
