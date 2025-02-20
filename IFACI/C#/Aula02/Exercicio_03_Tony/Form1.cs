using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Exercicio_03_Tony
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            pictureBox1.Image = Image.FromFile("c:\\Imagens\\desliga.bmp");
            pictureBox1.SizeMode = PictureBoxSizeMode.StretchImage;
            textBox1.Text = "Máquina Desligada";
        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            pictureBox1.Image = Image.FromFile("c:\\Imagens\\liga.bmp");
            pictureBox1.SizeMode = PictureBoxSizeMode.StretchImage;
            textBox1.Text = "Máquina Ligada";
        }

        private void button2_Click(object sender, EventArgs e)
        {
            pictureBox1.Image = Image.FromFile("c:\\Imagens\\desliga.bmp");
            pictureBox1.SizeMode = PictureBoxSizeMode.StretchImage;
            textBox1.Text = "Máquina Desligada";
        }

        private void button3_Click(object sender, EventArgs e)
        {
            DialogResult bc;
            MessageBoxButtons bot = MessageBoxButtons.YesNo;
            MessageBoxIcon icon = MessageBoxIcon.Asterisk;
            MessageBoxDefaultButton bd = MessageBoxDefaultButton.Button1;
            bc = MessageBox.Show("Você realmente deseja sair?", "Informação", bot, icon, bd);

            switch (bc)
            {
                case DialogResult.Yes:
                    Application.Exit();
                    break;
                case DialogResult.No:
                    break;
            }
        }
    }
}
