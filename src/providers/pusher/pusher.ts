import { Injectable } from '@angular/core';
import Pusher from 'pusher-js';

@Injectable()
export class PusherProvider {
    constructor() {
        var pusher = new Pusher('cda23682359279b46b93', {
            cluster: 'eu',
            encrypted: true,
        });
        this.channel = pusher.subscribe('chat');
    }
    channel;

    public init() {
        return this.channel;
    }
}