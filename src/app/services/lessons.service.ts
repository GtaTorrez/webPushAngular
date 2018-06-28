
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Lesson} from "../model/lesson";
import {Observable} from "rxjs/Observable";


@Injectable()
export class LessonsService {

    constructor(private http: HttpClient) {

    }

    loadAllLessons() : Observable<Lesson[]> {
    	console.log("get lecciones")
        return this.http.get<any>('http://127.0.0.1:9000/api/lessons')
            .map(res => res.lessons);
    }

    findLessonById(id:number) {
        return this.http.get<Lesson>('127.0.0.1:9000/api/lessons/' + id);
    }

}

