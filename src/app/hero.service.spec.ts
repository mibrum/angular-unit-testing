import { TestBed, inject } from "@angular/core/testing"
import { HeroService } from "./hero.service"
import { MessageService } from "./message.service";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

describe('HeroService', () => {
    let mockMessageService;
    let httpTestingController: HttpTestingController;
    let service;

    beforeEach(() => {
        mockMessageService = jasmine.createSpyObj(['add']);
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                HeroService,
                { provide: MessageService, useValue: mockMessageService }
            ]
        })

        httpTestingController = TestBed.get(HttpTestingController)
        service = TestBed.get(HeroService)
        // let messageService = TestBed.get(MessageService); Handle to a service
    });

    describe('getHero', () => {
        it('should call get with the correct URL', () => {

            // we call getHero = http.get 
            service.getHero(4).subscribe();

            // we tell to expect te call 
            const req = httpTestingController.expectOne('api/heroes/4');

            // tell the mock what data we want to return when this call comes in 
            req.flush({ id: 3, name: 'SuperDude', strength: 55 })
        })
    })
})