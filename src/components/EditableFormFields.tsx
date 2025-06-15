
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Save, X } from 'lucide-react';

type FormField = {
  name: string;
  value: string;
  type: 'text' | 'date' | 'checkbox' | 'signature';
};

type Props = {
  fields: FormField[];
  onSave: (updatedFields: FormField[]) => void;
  onCancel: () => void;
};

const EditableFormFields = ({ fields, onSave, onCancel }: Props) => {
  const [editedFields, setEditedFields] = useState<FormField[]>(fields);

  const updateField = (index: number, value: string) => {
    const updated = [...editedFields];
    updated[index] = { ...updated[index], value };
    setEditedFields(updated);
  };

  const handleSave = () => {
    onSave(editedFields);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Edit Form Fields
          <div className="flex gap-2">
            <Button onClick={handleSave} size="sm">
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
            <Button onClick={onCancel} variant="outline" size="sm">
              <X className="w-4 h-4 mr-2" />
              Cancel
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {editedFields.map((field, index) => (
            <div key={index} className="space-y-2">
              <Label htmlFor={`field-${index}`} className="text-sm font-medium">
                {field.name}
              </Label>
              {field.name === 'Statement of Facts' ? (
                <Textarea
                  id={`field-${index}`}
                  value={field.value}
                  onChange={(e) => updateField(index, e.target.value)}
                  rows={4}
                  className="resize-none"
                />
              ) : (
                <Input
                  id={`field-${index}`}
                  type={field.type === 'date' ? 'date' : 'text'}
                  value={field.value}
                  onChange={(e) => updateField(index, e.target.value)}
                />
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default EditableFormFields;
