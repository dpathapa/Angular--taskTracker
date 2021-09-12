import { Component, OnInit } from '@angular/core';
import { TASKS } from 'src/app/mock-task';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  //tasks: Task[] = TASKS
  //calling from services
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    //using services
    //this.tasks = this.taskService.getTasks();

    //using observables
    this.taskService.getTasks().subscribe((tasks) =>
      this.tasks = tasks);
  }

}
