import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Material Modules
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-data-generation',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // Material Modules
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './data-generation.component.html',
  styleUrls: ['./data-generation.component.scss']
})
export class DataGenerationComponent {
  dataForm: FormGroup;
  isGenerating = false;
  generationResult: { success: boolean; message: string; filePath?: string } | null = null;

  constructor(private fb: FormBuilder) {
    this.dataForm = this.fb.group({
      recordCount: [
        null, 
        [
          Validators.required, 
          Validators.min(0), 
          Validators.max(1000000)
        ]
      ]
    });
  }

  generateData(): void {
    if (this.dataForm.invalid) return;

    this.isGenerating = true;
    this.generationResult = null;

    // Simulate API call
    setTimeout(() => {
      this.generationResult = {
        success: true,
        message: `Successfully generated ${this.dataForm.value.recordCount} records`,
        filePath: '/assets/generated-data.xlsx' // Example path
      };
      this.isGenerating = false;
    }, 2000);
  }

  // Helper method to check field validity
  isFieldInvalid(field: string): boolean {
    const control = this.dataForm.get(field);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }
}